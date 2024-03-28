export function getSocialMediaPlatform(urls: { value: string }[]) {
  return urls.map(url => {
    if (url.value.includes('t.me')) {
      return { ...url, platform: 'telegram' };
    } else if (url.value.includes('youtube.com')) {
      return { ...url, platform: 'youtube' };
    } else if (url.value.includes('instagram.com')) {
      return { ...url, platform: 'instagram' };
    } else return;
  });
}
