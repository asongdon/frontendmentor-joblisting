export function filterTheList(filter, list) {
  let filteredList = [...list]

  const filtered = filteredList.filter(item => item.role === filter)
  filteredList = filtered
}
