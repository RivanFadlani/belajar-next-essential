type Settings = {
  siteName: string;
};

export async function getSetting(): Promise<Settings> {
  const response = await fetch('http://localhost:3001/settings');
  const settings = await response.json();

  return settings;
}
