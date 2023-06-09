import { IPagination } from '@inkline/inkline/components/IPagination/index';
import {
    IPaginationBasicExample,
    IPaginationColorVariantsExample,
    IPaginationLimitExample,
    IPaginationLimitResponsiveExample,
    IPaginationQuickLinksExample,
    IPaginationSizeVariantsExample
} from '@inkline/inkline/components/IPagination/examples/index';
import { colorArgType, createStory, sizeArgType } from '@inkline/inkline/__storybook__';

export default {
    component: IPagination,
    title: 'Components/Pagination',
    argTypes: {
        ...colorArgType(['light', 'dark']),
        ...sizeArgType()
    }
};

export const Basic = createStory(IPaginationBasicExample);
export const ColorVariants = () => IPaginationColorVariantsExample;
export const Limit = () => IPaginationLimitExample;
export const LimitResponsive = () => IPaginationLimitResponsiveExample;
export const QuickLinks = () => IPaginationQuickLinksExample;
export const SizeVariants = () => IPaginationSizeVariantsExample;
