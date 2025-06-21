import { sh } from 'jsr:@nsf/shell-util'

export { sh }
export const ssh = (strs, ...vars) =>
  sh([`ssh root@ssh.devazuka.com ${String.raw(strs, ...vars)}`])

