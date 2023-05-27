export const formatDate = (startDate) => {
  const date = new Date(startDate.seconds * 1000)
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  switch (month) {
    case 1:
      return `Ene ${year}`
    case 2:
      return `Feb ${year}`
    case 3:
      return `Mar ${year}`
    case 4:
      return `Abr ${year}`
    case 5:
      return `May ${year}`
    case 6:
      return `Jun ${year}`
    case 7:
      return `Jul ${year}`
    case 8:
      return `Ago ${year}`
    case 9:
      return `Sep ${year}`
    case 10:
      return `Oct ${year}`
    case 11:
      return `Nov ${year}`
    case 12:
      return `Dic ${year}`
    default:
      return null
  }
}
