import Toast from './Toast.svelte'

export function create(props) {
  if (typeof props === 'string') props = { message: props }
  
  const toast = new Toast({
    target: document.body,
    props,
    intro: true,
  });
  
  toast.$on('destroyed', toast.$destroy)
  
  return toast;
}

Toast.create = create

export default Toast