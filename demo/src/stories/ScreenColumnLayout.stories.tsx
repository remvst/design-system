import { Spacing, FlowList, Frame, VerticalCenter, SmallLabel, AlignRight, Gauge, KeyValueLayout, LabelledSlider, BalancedRow, BalancedStack, MainButton, Dim, StackList, ScreenStackLayout, ScreenStackLayoutTop, ScreenStackLayoutContent, ScreenStackLayoutBottom, ScreenColumnLayout, ScreenColumnLayoutMainColumn, ScreenColumnLayoutCentralContent, ScreenColumnLayoutMainColumnHeader, ScreenColumnLayoutMainColumnFooter, ScreenColumnLayoutMainColumnContent, MainTitle, TextBlock, ScrollableContent } from '@remvst/design-system';
import React from 'react';
import './screen-layout-preview.css';
import { StoryObj } from '@storybook/react';
import { MobileTestComponent } from '../mobile-test-component';

export default {
    title: 'Layouts/ScreenColumnLayout',
    component: ScreenColumnLayout,
    parameters: {
        layout: 'fullscreen',
    },
};

export const MainMenu: StoryObj = {
    render: () => (
        <MobileTestComponent>
            <ScreenColumnLayout>
                <ScreenColumnLayoutMainColumn>
                    <ScreenColumnLayoutMainColumnHeader>
                        <MainTitle>Header</MainTitle>
                    </ScreenColumnLayoutMainColumnHeader>

                    <ScreenColumnLayoutMainColumnContent>
                        <StackList>
                            <MainButton>Play</MainButton>
                            <MainButton>Settings</MainButton>
                            <MainButton>Select Level</MainButton>
                            <MainButton>Other Option</MainButton>
                            <MainButton>This won't fit</MainButton>
                        </StackList>

                    </ScreenColumnLayoutMainColumnContent>

                    <ScreenColumnLayoutMainColumnFooter>
                        <StackList>
                            <MainButton>Quit</MainButton>
                            <MainButton>Nope</MainButton>
                        </StackList>
                    </ScreenColumnLayoutMainColumnFooter>
                </ScreenColumnLayoutMainColumn>

                <ScreenColumnLayoutCentralContent>
                    <ScrollableContent>
                        <Frame>
                            <MainTitle>Lipsum</MainTitle>
                            <TextBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum mauris urna, sed fermentum ante aliquet sed. Donec non urna feugiat, dignissim sapien ut, ultricies metus. Ut eu nisi id mauris venenatis blandit. Donec auctor tortor euismod fermentum dictum. Etiam vel ante arcu. Vivamus maximus condimentum malesuada. Sed interdum at dui a malesuada. Aenean tempor mi fermentum condimentum imperdiet. Pellentesque at lacus aliquam, porta purus sit amet, congue nisi. Nam a nisi non nibh accumsan luctus sed nec purus. Aenean feugiat odio vitae enim euismod, nec porta felis rhoncus. Quisque eget feugiat mi. Sed ullamcorper purus velit, at dapibus nisi commodo id. Aliquam at blandit odio, eu pulvinar lacus. Mauris quis porttitor augue, eu sodales velit. Nunc placerat justo id eros pretium, et lobortis metus placerat. </TextBlock>
                        </Frame>
                    </ScrollableContent>
                </ScreenColumnLayoutCentralContent>
            </ScreenColumnLayout>
        </MobileTestComponent>
    ),
};

export const SettingsMenu: StoryObj = {
    render: () => (<ScreenColumnLayout>
        <ScreenColumnLayoutMainColumn>
            <ScreenColumnLayoutMainColumnHeader>
                <MainTitle>Settings</MainTitle>
            </ScreenColumnLayoutMainColumnHeader>

            <ScreenColumnLayoutMainColumnContent>
                <StackList>
                    <KeyValueLayout>
                        <SmallLabel>Raytracing</SmallLabel>
                        <SmallLabel>On</SmallLabel>
                    </KeyValueLayout>

                    <KeyValueLayout>
                        <SmallLabel>Performance</SmallLabel>
                        <LabelledSlider
                            label={value => `${value}%`}
                            min={0}
                            max={100}
                            step={1} />
                    </KeyValueLayout>
                </StackList>

            </ScreenColumnLayoutMainColumnContent>

            <ScreenColumnLayoutMainColumnFooter>
                <StackList>
                    <MainButton>Save</MainButton>
                    <MainButton>Cancel</MainButton>
                </StackList>
            </ScreenColumnLayoutMainColumnFooter>
        </ScreenColumnLayoutMainColumn>
    </ScreenColumnLayout>)
}
