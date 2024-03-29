export const pagesPath = {
  "home": {
    $url: (url?: { hash?: string }) => ({ pathname: '/home' as const, hash: url?.hash })
  },
  "report": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/report/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/report' as const, hash: url?.hash })
  },
  "signup": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signup' as const, hash: url?.hash })
  },
  "tech": {
    $url: (url?: { hash?: string }) => ({ pathname: '/tech' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
