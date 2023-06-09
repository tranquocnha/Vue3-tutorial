import { IProgress } from '@inkline/inkline/components/IProgress/index';
import {
    IProgressBasicExample,
    IProgressBarColorVariantsExample,
    IProgressColorVariantsExample,
    IProgressSizeVariantsExample,
    IProgressStackedExample,
    IProgressValueExample
} from '@inkline/inkline/components/IProgress/examples/index';
import { colorArgType, createStory, sizeArgType } from '@inkline/inkline/__storybook__';

export default {
    component: IProgress,
    title: 'Components/Progress',
    argTypes: {
        ...colorArgType(['light', 'dark']),
        ...sizeArgType()
    }
};

export const Basic = createStory(IProgressBasicExample);
export const BarColorVariants = () => IProgressBarColorVariantsExample;
export const ColorVariants = () => IProgressColorVariantsExample;
export const SizeVariants = () => IProgressSizeVariantsExample;
export const Stacked = () => IProgressStackedExample;
export const Value = () => IProgressValueExample;
