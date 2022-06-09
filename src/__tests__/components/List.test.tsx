import List from '../../components/List';
import { ListProps } from '../../types/list'
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

Enzyme.configure({adapter: new Adapter()});

describe('List test', () => {
    describe('there are no items', () => {
        it("it should show (There are no scheduled events.)", () => {
            const list: ListProps[] = [];
            const result = shallow(<List list={list}/>)
            expect(result.text()).toContain('There are no scheduled events.')
            expect(result.text()).not.toContain('Product List: ')
        });
    })
    describe('there are items', () => {
        it('it should show lists', () => {
            const list: ListProps[] = [
                {
                    id: 1,
                    name: 'kim'
                  },
                  {
                    id: 2,
                    name: 'park'
                  }
            ];
            const result = shallow(<List list={list}/>)
            expect(result.text()).not.toContain('There are no scheduled events.')
            expect(result.text()).toContain('Product List: ')

        })
    })
})