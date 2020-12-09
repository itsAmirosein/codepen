import _ from "lodash";
import stringSimilarity from "string-similarity";
export default function reducer(state, action) {
  const { currentData, filterData } = state;
  const cloneData = [...currentData];
  const filteredData = [...filterData];
  switch (action.type) {
    case "SIMILARITY":
      const suggestItems = _.take(
        state.currentData.filter(
          (data) =>
            stringSimilarity.compareTwoStrings(action.payload, data.title) > 0.2
        ),
        6
      );
      return {
        ...state,
        suggested: suggestItems,
      };
    case "LIKE":
      const clone = _.clone(filteredData);
      const exactIndex = clone.findIndex(
        (data) => data.id === action.payload.id
      );
      clone[exactIndex] = _.clone(clone[exactIndex]);
      !action.payload.liked
        ? clone[exactIndex].likes++
        : clone[exactIndex].likes--;
      return {
        ...state,
        filterData: clone,
      };
    case "SORT_VIEW":
      return {
        ...state,
        filterData: filteredData.sort((a, b) => b.views - a.views),
        isSort: "sortView",
      };
    case "SORT_LIKE":
      return {
        ...state,
        filterData: filteredData.sort((a, b) => b.likes - a.likes),
        isSort: "sortLike",
      };
    case "SORT_COMMENT":
      return {
        ...state,
        filterData: filteredData.sort((a, b) => b.comments - a.comments),
        isSort: "sortComment",
      };
    case "SORT_DATE":
      return {
        ...state,
        filterData: filteredData.sort((a, b) => b.date - a.date),
        isSort: "sortDate",
      };
    case "FREE":
      const filterDataFree = _.clone(
        filteredData.filter((data) => !data.isSpecial)
      );
      return {
        ...state,
        filterData: filterDataFree,
      };
    case "ALL":
      return {
        ...state,
        filterData: cloneData,
      };
    case "MANAGER":
      const filterdata = _.clone(
        filteredData.filter((data) => !data.managerChosen)
      );

      return {
        ...state,
        filterData: filterdata,
      };

    default:
      return state;
  }
}

export const ACTIONS = {
  MOST_VIEW: "MOST_VIEW",
  SIMILARITY: "SIMILARITY",
  LIKE: "LIKE",
  SORT_VIEW: "SORT_VIEW",
  SORT_LIKE: "SORT_LIKE",
  SORT_COMMENT: "SORT_COMMENT",
  SORT_DATE: "SORT_DATE",
  FREE : "FREE",
  ALL : "ALL"
};
