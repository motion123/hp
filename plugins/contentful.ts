import { Entry, EntryCollection, Asset } from '@/node_modules/contentful'
const contentful = require('contentful')
import { Plugin } from '@nuxt/types'

export const createClient = () => {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
}

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

declare module 'vue/types/vue' {
  interface Vue {
    $ctfGetEntry<T>(entryId: string): Promise<Entry<T>>
    $ctfGetEntries<T>(contentType: string): Promise<EntryCollection<T>>
    $ctfGetAsset(assetId: string): Promise<Asset>
  }
}

declare module '@nuxt/types' {
  interface Context {
    $ctfGetEntry<T>(entryId: string): Promise<Entry<T>>
    $ctfGetEntries<T>(entriType: string): Promise<EntryCollection<T>>
    $ctfGetAsset(assetId: string): Promise<Asset>
  }
}

const ctfPlugin: Plugin = (context, inject) => {
  inject('ctfGetEntry', (entryId: string) => client.getEntry(entryId))
  inject('ctfGetEntries', (entryType: string) =>
    client.getEntries({ content_type: entryType })
  )
  inject('ctfGetAsset', (assetId: string) => client.getAsset(assetId))
}

export default ctfPlugin
