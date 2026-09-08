import { Setting } from '../types/Setting';

export async function getSetting(): Promise<Setting> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('http://localhost:3001/settings');
  const settings = await response.json();

  return settings;
}
