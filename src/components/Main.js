import React, { forwardRef, useEffect, useState } from "react";
import CodeCard from "./CodeCard";
import { ACTIONS } from "./reducer";
import { useContext } from "react";
import Context from "./context";
import { MdSort, MdSearch } from "react-icons/md";
import { Switch } from "@material-ui/core";
import * as sc from "./styles/content";

export default function Main() {
  const [value, setValue] = useState("");
  const [checked,setChecked] = useState(false)
  const [matchId, setMatchId] = useState(0);
  const { state, dispatch } = useContext(Context);
  const { isSort, suggested, filterData } = state;

  // handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // suggest data
  useEffect(() => {
    dispatch({
      type: ACTIONS.SIMILARITY,
      payload: value,
    });
  }, [value, dispatch]);

  // handle likes
  const handleLikeClick = (id, liked) => {
    dispatch({
      type: ACTIONS.LIKE,
      payload: { id, liked },
    });
  };

  const handleSortView = () => {
    dispatch({
      type: ACTIONS.SORT_VIEW,
    });
  };

  const handleSortLike = () => {
    dispatch({
      type: ACTIONS.SORT_LIKE,
    });
  };

  const handleSortComment = () => {
    dispatch({
      type: ACTIONS.SORT_COMMENT,
    });
  };
  const handleSortDate = () => {
    dispatch({
      type: ACTIONS.SORT_DATE,
    });
  };
  const handlePopover = (id) => {
    setMatchId(id);
  };
  const handleComment = (id) => {
    setMatchId(id);
  };
  const handleSwitch = (eve) => {
    setChecked(eve.target.checked)

  };

  useEffect(()=>{
    if (checked) {
      dispatch({
        type: ACTIONS.FREE,
      });
    } else {
      dispatch({
        type: ACTIONS.ALL,
      });
    }
  },[checked,dispatch])

  const FreeSwitch = forwardRef((props,ref) => {
      return <Switch ref={ref} {...props} />
  })


  return (
    <>
      <sc.InputSearchWrapper>
        <sc.InputSearch
          type="text"
          value={value}
          placeholder="جستجو"
          onChange={handleChange}
        />
        <MdSearch />
      </sc.InputSearchWrapper>
      <sc.PopularSearchWrapper suggested={suggested}>
        <h4 suggested={suggested}>پیشنهادها بر اساس جستجوی شما</h4>
        <sc.PopularTagsWrapper>
          {suggested.map((item) => {
            return <sc.Tag key={item.id}>{item.title}</sc.Tag>;
          })}
        </sc.PopularTagsWrapper>
      </sc.PopularSearchWrapper>

      <sc.MainWrapper>
        {/* <FilterSide /> */}
        <sc.CardsWrapper>
          <sc.SortWrapper>
            <MdSort /> مرتب‌سازی بر اساس:
            <sc.View onClick={handleSortView} isSort={isSort}>
              پربازدیدترین
            </sc.View>
            <sc.Favourite onClick={handleSortLike} isSort={isSort}>
              پرطرفدارترین
            </sc.Favourite>
            <sc.Discuss onClick={handleSortComment} isSort={isSort}>
              پربحث ترین
            </sc.Discuss>
            <sc.Date onClick={handleSortDate} isSort={isSort}>
              تاریخ انتشار
            </sc.Date>
            <sc.onlyFree>
              فقط رایگان
              <FreeSwitch color="secondary" checked={checked} onChange={handleSwitch} />
            </sc.onlyFree>
          </sc.SortWrapper>
          {filterData.map((card) => {
            return (
              <CodeCard
                key={card.id}
                props={card}
                handleLikeClick={handleLikeClick}
                matchId={matchId}
                handlePopover={() => handlePopover(card.id)}
                handleComment={() => handleComment(card.id)}
              />
            );
          })}
        </sc.CardsWrapper>
      </sc.MainWrapper>
    </>
  );
}
