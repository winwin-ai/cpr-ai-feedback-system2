// Cloudinary URL 생성 유틸리티
const CLOUD_NAME = 'dn3cicucf';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * 로컬 경로를 Cloudinary URL로 변환
 * @param localPath - 로컬 경로 (예: "/videos/Q01-A.jpg")
 * @returns Cloudinary URL
 */
export function getCloudinaryUrl(localPath: string | undefined): string {
  if (!localPath) return '';
  
  // 이미 Cloudinary URL인 경우 그대로 반환
  if (localPath.startsWith('https://res.cloudinary.com')) {
    return localPath;
  }
  
  // /videos/Q01-A.jpg → cpr-videos/Q01-A
  const filename = localPath.replace('/videos/', '').replace(/\.[^.]+$/, '');
  const extension = localPath.split('.').pop()?.toLowerCase() || '';
  
  // 리소스 타입 결정
  const isVideo = ['mp4', 'webm', 'ogg', 'mov'].includes(extension);
  const resourceType = isVideo ? 'video' : 'image';
  
  return `${BASE_URL}/${resourceType}/upload/cpr-videos/${filename}`;
}

/**
 * 이미지 URL 생성 (변환 옵션 포함)
 */
export function getCloudinaryImageUrl(
  localPath: string | undefined,
  options?: {
    width?: number;
    height?: number;
    crop?: 'fill' | 'fit' | 'scale' | 'thumb';
    quality?: 'auto' | number;
  }
): string {
  if (!localPath) return '';
  
  const filename = localPath.replace('/videos/', '').replace(/\.[^.]+$/, '');
  
  // 변환 옵션 생성
  const transforms: string[] = [];
  if (options?.width) transforms.push(`w_${options.width}`);
  if (options?.height) transforms.push(`h_${options.height}`);
  if (options?.crop) transforms.push(`c_${options.crop}`);
  if (options?.quality) transforms.push(`q_${options.quality}`);
  
  const transformStr = transforms.length > 0 ? transforms.join(',') + '/' : '';
  
  return `${BASE_URL}/image/upload/${transformStr}cpr-videos/${filename}`;
}

/**
 * 비디오 URL 생성 (변환 옵션 포함)
 */
export function getCloudinaryVideoUrl(
  localPath: string | undefined,
  options?: {
    width?: number;
    height?: number;
    quality?: 'auto' | number;
    format?: 'mp4' | 'webm';
  }
): string {
  if (!localPath) return '';
  
  const filename = localPath.replace('/videos/', '').replace(/\.[^.]+$/, '');
  
  // 변환 옵션 생성
  const transforms: string[] = [];
  if (options?.width) transforms.push(`w_${options.width}`);
  if (options?.height) transforms.push(`h_${options.height}`);
  if (options?.quality) transforms.push(`q_${options.quality}`);
  if (options?.format) transforms.push(`f_${options.format}`);
  
  const transformStr = transforms.length > 0 ? transforms.join(',') + '/' : '';
  
  return `${BASE_URL}/video/upload/${transformStr}cpr-videos/${filename}`;
}
