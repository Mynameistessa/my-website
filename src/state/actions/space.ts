export const getSpaceData = (spaceData: any) => {
  return {
    type: "getSpaceData",
    payload: spaceData
  }
}

export const getCrabData = (crabData: any) => {
  return {
    type: "getCrabData",
    payload: crabData
  }
}