'use client'

export default function Error({error}:{error:Error}){
    return <h1>Ooops! {error.message}</h1>
}