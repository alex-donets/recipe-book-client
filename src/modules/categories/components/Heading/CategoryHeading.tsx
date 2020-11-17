import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import { isEmpty } from 'lodash';
import {clear, fetchCategories, setContentVisible, setEditMode, setSelectedCategory} from "../../actions";
import {getCategoryList, getIsHomePage, getListLoading, getSelectedCategoryId} from "../../selectors";
import CategoryCard from "../../../../shared/components/CategoryCard/CategoryCard";
import DefaultIcon from "../../../../assets/plus.svg";
import {categoryPhotoUrl} from "../../../../backend/constants";
import {Category} from "../../types";

const CategoryHeading = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector(getCategoryList);
    const isHomePage = useSelector(getIsHomePage);
    const selectedCategoryId = useSelector(getSelectedCategoryId);

    useEffect(() => {
        if(isEmpty(categoryList)) {
            dispatch(fetchCategories());
        }
    }, [categoryList]);

    const handleSelect = (id: string) => {
        dispatch(clear());
        dispatch(setContentVisible(true));
        dispatch(setSelectedCategory(id));
        dispatch(setEditMode(true));
    };

    const handleSelectNew = () => {
        dispatch(clear());
        dispatch(setContentVisible(true));
        dispatch(setEditMode(false));
        dispatch(setSelectedCategory('new'));
    };

    return (
        <Card.Group centered>
            {categoryList.map((item: Category) => (
                <CategoryCard
                    key={item._id}
                    id={item._id}
                    title={item.name}
                    photoUrl={categoryPhotoUrl + item._id || DefaultIcon}
                    onSelect={handleSelect}
                    isSelected={item._id === selectedCategoryId}
                />
            ))}

            {!isHomePage &&
                <CategoryCard
                    key='new'
                    id='new'
                    title='Add New'
                    onSelect={handleSelectNew}
                    photoUrl={DefaultIcon}
                    isSelected={false}
                />
            }
        </Card.Group>
    );
};

export default CategoryHeading;
