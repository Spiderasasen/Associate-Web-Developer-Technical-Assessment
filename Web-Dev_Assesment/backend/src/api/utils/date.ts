export function formatDate(timestamp: number): string{
    const d = new Date(timestamp * 1000);
    return d.toISOString().split('T')[0];
}