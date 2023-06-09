import { INavbar } from '@inkline/inkline/components/INavbar/index';
import {
    INavbarBasicExample,
    INavbarCollapseBreakpointExample,
    INavbarCollapseTrueExample,
    INavbarCollapseFalseExample,
    INavbarCollapsedStateExample,
    INavbarColorVariantsExample,
    INavbarDropdownExample,
    INavbarNavPlacementExample,
    INavbarSizeVariantsExample,
    INavbarRoutingExample,
    INavbarRoutingActiveExample
} from '@inkline/inkline/components/INavbar/examples/index';
import { colorArgType, createStory, sizeArgType } from '@inkline/inkline/__storybook__';

export default {
    component: INavbar,
    title: 'Components/Navbar',
    argTypes: {
        ...colorArgType(['light', 'dark']),
        ...sizeArgType()
    }
};

export const Basic = createStory(INavbarBasicExample);
export const CollapseBreakpoint = () => INavbarCollapseBreakpointExample;
export const CollapseTrue = () => INavbarCollapseTrueExample;
export const CollapseFalse = () => INavbarCollapseFalseExample;
export const CollapsedState = () => INavbarCollapsedStateExample;
export const ColorVariants = () => INavbarColorVariantsExample;
export const Dropdown = () => INavbarDropdownExample;
export const NavPlacement = () => INavbarNavPlacementExample;
export const SizeVariants = () => INavbarSizeVariantsExample;
export const Routing = () => INavbarRoutingExample;
export const RoutingActive = () => INavbarRoutingActiveExample;
