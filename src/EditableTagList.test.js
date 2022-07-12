import { fireEvent, render, screen } from '@testing-library/react';
import EditableTagList from './EditableTagList';

const tags = ['tag A', 'tag B'];

test.each(tags)('renders the %p tag', (tagName) => {
    render(<EditableTagList tags={tags} />);
    const tagElement = screen.getByText(tagName);
    expect(tagElement).toBeInTheDocument();
});

test('removes a tag when it is clicked', () => {
    const setTags = jest.fn();
    const expected = ['tag B'];

    render(<EditableTagList tags={tags} setTags={setTags} />);
    const tagElement = screen.getByText('tag A');
    fireEvent.click(tagElement);
    expect(setTags).toHaveBeenCalledWith(expected);
});

test('adds a tag when the add button is clicked', () => {
    const setTags = jest.fn();
    const newTagName = 'tag C'
    const expected = tags.concat([newTagName]);

    render(<EditableTagList tags={tags} setTags={setTags} />);
    const inputElement = screen.getByLabelText('Add tag:');
    const saveButtonElement = screen.getByText('+');
    fireEvent.change(inputElement, {target: {value: newTagName}})
    fireEvent.click(saveButtonElement);
    expect(setTags).toHaveBeenCalledWith(expected);
});