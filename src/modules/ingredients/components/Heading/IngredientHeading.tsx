import React, { BaseSyntheticEvent } from 'react';
import { Button, Header, Icon, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientList } from '../../selectors';
import { isEmpty } from 'lodash';
import './styles.scss';
import { deleteIngredient } from '../../actions';

const IngredientHeading = () => {
    const dispatch = useDispatch();

    const ingredientList = useSelector(getIngredientList);

    const handleClick = (e: BaseSyntheticEvent) => {
        dispatch(deleteIngredient(e.target.id));
    };

    return (
        <div>
            <Header as="h3" className="primary-text">
                Ingredients
            </Header>

            {!isEmpty(ingredientList) && (
                <Table className="ui very basic compact collapsing unstackable table ingredient">
                    <Table.Body>
                        {ingredientList.map(({ id, name, quantity, measure }) => (
                            <Table.Row key={id}>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell textAlign="right">{quantity}</Table.Cell>
                                <Table.Cell>{measure}</Table.Cell>
                                <Table.Cell>
                                    <Button
                                        id={id}
                                        icon
                                        type="button"
                                        basic
                                        circular
                                        compact
                                        onClick={(e) => handleClick(e)}
                                    >
                                        <Icon id={id} name="trash alternate outline" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </div>
    );
};

export default IngredientHeading;
