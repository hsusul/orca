import { expect, it, vi } from 'vitest'

vi.mock('./orcad-managed-serving', () => {
  throw new Error('Managed serving implementation is unavailable')
})

it('imports and shuts down unused tunnels without loading managed serving', async () => {
  const { shutdownOrcadManagedTunnels } = await import('./orcad-managed-tunnel')

  await expect(shutdownOrcadManagedTunnels()).resolves.toBeUndefined()
})
