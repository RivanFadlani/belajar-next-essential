import { Setting } from '../types/Setting';

export async function getSetting(): Promise<Setting> {
  const response = await fetch('http://localhost:3001/settings');
  const settings = await response.json();

  return settings;
}
