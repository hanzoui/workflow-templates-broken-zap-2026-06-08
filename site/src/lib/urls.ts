const COMFY_CLOUD_BASE_URL = 'https://cloud.hanzo.ai/';

export function getCloudCtaUrl(templateName: string, ctaLocation: string): string {
  const params = new URLSearchParams({
    template: templateName,
    mode: 'linear',
    utm_source: 'templates',
    utm_medium: 'web',
    utm_campaign: 'template-detail',
    utm_content: templateName,
    utm_term: ctaLocation,
  });

  return `${COMFY_CLOUD_BASE_URL}?${params.toString()}`;
}
