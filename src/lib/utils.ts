export const Username = 'justmangoou';
export const OldUsername = 'justmangot';
export const SpotifyID = 'pdjj0m8thgqufmstx2qohc5sx';

export async function copyToClipboard(content: string) {
	await navigator.clipboard.writeText(content);
}
