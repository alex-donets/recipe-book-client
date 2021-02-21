import React, { useEffect } from 'react';
import '../../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import { clear, fetchCategories, setContentVisible, setEditMode, setSelectedCategory } from '../../actions';
import { getCategoryList, getSelectedCategoryId } from '../../selectors';
import CategoryCard from '../../../../shared/components/CategoryCard/CategoryCard';
import DefaultIcon from '../../../../assets/plus.svg';
import { categoryPhotoUrl } from '../../../../backend/constants';
import { Category } from '../../types';

const CategoryHeading = () => {
    const dispatch = useDispatch();

    const location = useLocation();
    const isHomePage = location && location.pathname === '/';

    const categoryList = useSelector(getCategoryList);
    const selectedCategoryId = useSelector(getSelectedCategoryId);

    useEffect(() => {
        if (!categoryList) {
            dispatch(fetchCategories());
        }
    }, []);

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
            {categoryList &&
                categoryList.map((item: Category) => (
                    <CategoryCard
                        key={item._id}
                        id={item._id}
                        title={item.name}
                        photoUrl={categoryPhotoUrl + item._id + '/' + item.updatedAt || DefaultIcon}
                        onSelect={handleSelect}
                        isSelected={item._id === selectedCategoryId}
                    />
                ))}

            {isEmpty(categoryList) && isHomePage && <div className="empty-holder">No categories added yet</div>}

            {!isHomePage && (
                <CategoryCard
                    key="new"
                    id="new"
                    title="Add New"
                    onSelect={handleSelectNew}
                    photoUrl={DefaultIcon}
                    isSelected={false}
                />
            )}
        </Card.Group>
    );
};

export default CategoryHeading;
