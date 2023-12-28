import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { FlowList, Frame, VerticalCenter, SmallLabel, AlignRight, Gauge, KeyValueLayout, LabelledSlider, BalancedRow, BalancedStack, MainButton, Dim, StackList, ScreenStackLayout, ScreenStackLayoutTop, ScreenStackLayoutContent, ScreenStackLayoutBottom, ScreenColumnLayout, ScreenColumnLayoutMainColumn, ScreenColumnLayoutCentralContent, ScreenColumnLayoutMainColumnHeader, ScreenColumnLayoutMainColumnFooter, ScreenColumnLayoutMainColumnContent, MainTitle, TextBlock, ScrollableContent } from '@remvst/design-system';

const demos: React.ReactNode[] = [
    <>
        <h1>Screen Stack Layout</h1>

        <div className='demo-frame'>
            <ScreenStackLayout>
                <ScreenStackLayoutTop>
                    <MainTitle>Main Title</MainTitle>
                </ScreenStackLayoutTop>
                <ScreenStackLayoutContent>
                    <Frame>
                    <StackList>
                        <MainButton>Play</MainButton>
                        <MainButton>Settings</MainButton>
                        <MainButton>Select Level</MainButton>
                    </StackList>
                    </Frame>
                </ScreenStackLayoutContent>
                <ScreenStackLayoutBottom>
                    <AlignRight>
                    <FlowList>
                        <MainButton>Quit</MainButton>
                        <MainButton>Nope</MainButton>
                    </FlowList>
                    </AlignRight>
                </ScreenStackLayoutBottom>
            </ScreenStackLayout>
        </div>
    </>,

    <>
        <h1>Screen Column Layout</h1>

        <div className='demo-frame' style={{height: '400px'}}>
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
        </div>
    </>,

    <>
        <h1>Screen Column Layout</h1>

        <div className='demo-frame' style={{height: '400px'}}>
            <ScreenColumnLayout>
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
            </ScreenColumnLayout>
        </div>
    </>,

    <>
        <h1>Dialog</h1>
        <div className='demo-frame'>
            <Dim>
                <ScreenStackLayout>
                    <VerticalCenter>
                        <Frame style={{minWidth: '50%', maxWidth: '80%', margin: 'auto'}}>
                            <MainTitle style={{'textAlign': 'center'}}>Confirm?</MainTitle>
                            <SmallLabel style={{'textAlign': 'center', 'margin': '20px'}}>Would you like to do the thing?</SmallLabel>

                            <FlowList>
                                <MainButton>Yes</MainButton>
                                <MainButton>No</MainButton>
                            </FlowList>
                        </Frame>
                    </VerticalCenter>
                </ScreenStackLayout>
            </Dim>
        </div>
    </>,

    <>
        <h1>Gauges</h1>

        <div className='demo-frame' style={{padding: '10px'}}>
            <div style={{margin: '10px'}}>
                <Gauge value={0} label="0%" />
            </div>

            <div style={{margin: '10px'}}>
                <Gauge value={0.5} label="50%" />
            </div>

            <div style={{margin: '10px'}}>
                <Gauge value={0.75} label="75%" />
            </div>

            <div style={{margin: '10px'}}>
                <Gauge value={1} label="100%" />
            </div>

            <div style={{margin: '10px'}}>
                <Gauge value={2} label="200%" />
            </div>
        </div>
    </>,

    <>
        <h1>Key/value layout</h1>

        <div className='demo-frame' style={{padding: '10px'}}>
            <KeyValueLayout>
                <div>Key</div>
                <div>Value</div>
            </KeyValueLayout>

            <KeyValueLayout>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum mauris urna, sed fermentum ante aliquet sed. </div>
                <div>Value</div>
            </KeyValueLayout>

            <KeyValueLayout>
                <div>Key</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum mauris urna, sed fermentum ante aliquet sed. </div>
            </KeyValueLayout>
        </div>
    </>,

    <>
        <h1>Balanced Row</h1>

        <div className='demo-frame' style={{padding: '10px'}}>
            <BalancedRow>
                <div>Small column</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum mauris urna, sed fermentum ante aliquet sed. </div>
                <div>Small column</div>
            </BalancedRow>
        </div>
    </>,

    <>
        <h1>Balanced Stack</h1>

        <div className='demo-frame' style={{padding: '10px', height: '400px'}}>
            <BalancedStack>
                <div>Small column</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum mauris urna, sed fermentum ante aliquet sed. Donec non urna feugiat, dignissim sapien ut, ultricies metus. Ut eu nisi id mauris venenatis blandit. Donec auctor tortor euismod fermentum dictum. Etiam vel ante arcu. Vivamus maximus condimentum malesuada. Sed interdum at dui a malesuada. Aenean tempor mi fermentum condimentum imperdiet. Pellentesque at lacus aliquam, porta purus sit amet, congue nisi. Nam a nisi non nibh accumsan luctus sed nec purus. Aenean feugiat odio vitae enim euismod, nec porta felis rhoncus. Quisque eget feugiat mi. Sed ullamcorper purus velit, at dapibus nisi commodo id. Aliquam at blandit odio, eu pulvinar lacus. Mauris quis porttitor augue, eu sodales velit. Nunc placerat justo id eros pretium, et lobortis metus placerat. </div>
                <div>Small column</div>
            </BalancedStack>
        </div>
    </>,
];

window.addEventListener('load', () => {
    const reactContent = document.querySelector('#react-content');

    for (const demo of demos) {
        const div = document.createElement('div');
        reactContent?.appendChild(div);
        createRoot(div).render(demo);
    }
});
