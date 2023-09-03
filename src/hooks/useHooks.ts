import { ElMessageBox } from 'element-plus'
export const useConfirm = ({ message, title = '提示' }) => {
  return new Promise((resolve, reject) => {
    ElMessageBox({
      message,
      title,
      showCancelButton: true,
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        reject()
        // catch error
      })
  })

}