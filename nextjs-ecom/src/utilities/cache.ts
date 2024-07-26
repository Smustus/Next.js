import { unstable_cache } from "next/cache"
import { cache } from "react"

//https://react.dev/reference/react/cache#noun-labs-1201738-(2)
//https://nextjs.org/docs/app/building-your-application/caching

type callBack = (...args: any[]) => Promise<any>

export const cache = (callback, keyParts, options) => {
 
}
