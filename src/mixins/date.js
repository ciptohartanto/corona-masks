const dates = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
]

export const theDate = {
  computed: {
    dayOfToday() {
      return dates[new Date().getDay()]
    }
  }
}
