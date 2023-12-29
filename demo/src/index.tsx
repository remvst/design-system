import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Spacing, FlowList, Frame, VerticalCenter, SmallLabel, AlignRight, Gauge, KeyValueLayout, LabelledSlider, BalancedRow, BalancedStack, MainButton, Dim, StackList, ScreenStackLayout, ScreenStackLayoutTop, ScreenStackLayoutContent, ScreenStackLayoutBottom, ScreenColumnLayout, ScreenColumnLayoutMainColumn, ScreenColumnLayoutCentralContent, ScreenColumnLayoutMainColumnHeader, ScreenColumnLayoutMainColumnFooter, ScreenColumnLayoutMainColumnContent, MainTitle, TextBlock, ScrollableContent } from '@remvst/design-system';

const demos = new Map<string, React.ReactNode>([
    [
        'Screen Stack Layout',
        <>
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
        </>
    ],

    [
        'Screen Column Layout With No Header',
        <>
            <ScreenColumnLayout>
                <ScreenColumnLayoutMainColumn>
                    <div style={{flexBasis: '30%'}} />

                    <ScreenColumnLayoutMainColumnContent style={{paddingTop: '5px'}}>
                        <StackList>
                            <MainButton>Play</MainButton>
                            <MainButton>Settings</MainButton>
                            <MainButton>Select Level</MainButton>
                            <MainButton>Other Option</MainButton>
                            <MainButton>This won't fit</MainButton>
                        </StackList>

                    </ScreenColumnLayoutMainColumnContent>
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
        </>
    ],
]);

function RootComponent() {
    return Array.from(demos.entries()).map(([title, demo], i) => {
        return <DemoComponent title={title} demo={demo} key={`demo-${i}`} />
    });
}

function DemoComponent(props: {
    title: string,
    demo: React.ReactNode,
}) {
    const [mobile, setMobile] = useState(false);
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => setMobile(!mobile)}>Mobile: {mobile ? 'yes' : 'no'}</button>

            <div className={(mobile ? 'mobile' : '') + ' demo-frame'}>
                {props.demo}
            </div>
        </div>
    )
}

window.addEventListener('load', () => {
    const reactContent = document.querySelector('#react-content') as HTMLDivElement;

    const div = document.createElement('div');
    reactContent?.appendChild(div);
    createRoot(reactContent).render(<RootComponent />);
});
