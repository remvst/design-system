import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Gauge, KeyValueLayout, BalancedRow, BalancedStack, MainButton, Dim, StackList, ScreenStackLayout, ScreenStackLayoutTop, ScreenStackLayoutContent, ScreenStackLayoutBottom, ScreenColumnLayout, ScreenColumnLayoutMainColumn, ScreenColumnLayoutCentralContent, ScreenColumnLayoutMainColumnHeader, ScreenColumnLayoutMainColumnFooter, ScreenColumnLayoutMainColumnContent } from '@remvst/design-system';

const demos: React.ReactNode[] = [
    <>
        <h1>Buttons</h1>

        <div className='demo-frame'>
            <ScreenStackLayout>
                <ScreenStackLayoutTop>
                    Top of the screen
                </ScreenStackLayoutTop>
                <ScreenStackLayoutContent>
                    <StackList>
                        <MainButton>Play</MainButton>
                        <MainButton>Quit</MainButton>
                        <MainButton>Nope</MainButton>
                    </StackList>
                </ScreenStackLayoutContent>
                <ScreenStackLayoutBottom>
                    Bottom of the screen
                </ScreenStackLayoutBottom>
            </ScreenStackLayout>
        </div>
    </>,

    <>
        <h1>Buttons</h1>

        <div className='demo-frame' style={{height: '400px'}}>
            <ScreenColumnLayout>
                <ScreenColumnLayoutMainColumn>
                    <ScreenColumnLayoutMainColumnHeader>
                        Main Column Header
                    </ScreenColumnLayoutMainColumnHeader>

                    <ScreenColumnLayoutMainColumnContent>
                        <StackList>
                            <MainButton>Play</MainButton>
                            <MainButton>Quit</MainButton>
                            <MainButton>Nope</MainButton>
                        </StackList>

                    </ScreenColumnLayoutMainColumnContent>

                    <ScreenColumnLayoutMainColumnFooter>
                        Main Column Footer
                    </ScreenColumnLayoutMainColumnFooter>
                </ScreenColumnLayoutMainColumn>

                <ScreenColumnLayoutCentralContent>
                    Central content
                </ScreenColumnLayoutCentralContent>
            </ScreenColumnLayout>
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

    <>
        <h1>Dimming</h1>

        <div className='demo-frame'>
            <Dim>
                Some Button
            </Dim>
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
