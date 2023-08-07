export const formatMoney = (num: number | string) => {
  if (~~num < 1000) return num
  return num.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  })
}