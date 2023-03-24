import {writable} from 'svelte/store'
import LZ from 'lz-string'

export let globalText = writable({
  events:{
  displayText: "whats visible event",
  popupText: 'visible event describe in more detail'
},
patterns:{
  displayText: "what trends happen over time",
popupText: 'the trends explained in more detail'
},
structures:{
  displayText: 'what effects the patterns what the realtionship between the parts',
  popupText: "the effects and the relationship between parts explained in more detail " 
},
mentalModel: {
  displayText: "whats assumption beliefs and values do people hold about the system? what beliefs keep the system in place",
  popupText: "expaned more appon the  the beliefs assumtion and values"
}})

if(location.hash){
  var data = JSON.parse(LZ.decompressFromEncodedURIComponent(location.hash.substr(4)))
  globalText.set(data)
}

let timer

export function forceUpdate(){
  clearTimeout(timer)
  timer = setTimeout(()=>{
    globalText.update((v)=>v)
  }, 700)
}

globalText.subscribe((v)=>{
  const compressed = LZ.compressToEncodedURIComponent(JSON.stringify(v))
  location.hash = "~v1" + compressed
  console.log(v)
})