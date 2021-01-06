import React from 'react';
import '../../styles.scss';
import { Divider, Grid, Header, Placeholder } from 'semantic-ui-react';

const RecipeItemLoaded = ({ showDivider }: { showDivider: boolean }) => {
    return (
        <Grid textAlign="center">
            <Header as="h2" className="headerHolder">
                <Placeholder.Line />
            </Header>

            <Grid.Row className="directions-holder">
                <Grid.Column width={5} className="recipe-img-holder">
                    <Placeholder className="placeholder-recipe">
                        <Placeholder.Image square />
                    </Placeholder>
                </Grid.Column>

                <Grid.Column width={11} textAlign="justified">
                    <Placeholder>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
            </Grid.Row>

            {showDivider && <Divider />}
        </Grid>
    );
};

export default RecipeItemLoaded;
