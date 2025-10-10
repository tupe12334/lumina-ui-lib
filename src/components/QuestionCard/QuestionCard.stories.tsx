import type { Meta, StoryObj } from '@storybook/react';
import { QuestionCard } from './QuestionCard';

const meta = {
  title: 'Components/QuestionCard',
  component: QuestionCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockQuestion = {
  id: '1',
  text: 'What is React?',
  type: 'selection',
  validationStatus: 'approved',
};

export const Default: Story = {
  args: {
    question: mockQuestion,
    isMobile: false,
    submissionStats: null,
    isAuthenticated: false,
    renderLink: ({ children }) => <div>{children}</div>,
    renderCard: ({ children }) => <div>{children}</div>,
    renderText: ({ text }) => <div style={{ fontSize: '16px', color: '#111827' }}>{text}</div>,
    renderBadge: ({ text }) => (
      <span style={{
        padding: '4px 12px',
        backgroundColor: '#3b82f6',
        color: '#fff',
        borderRadius: '4px',
        fontSize: '12px',
        display: 'inline-block'
      }}>
        {text}
      </span>
    ),
    renderProgressIndicator: null,
    t: (key) => key,
  },
};

export const WithModules: Story = {
  args: {
    ...Default.args,
    question: {
      ...mockQuestion,
      modules: [
        { id: 'm1', name: 'Mathematics' },
        { id: 'm2', name: 'Algebra' },
      ],
    },
  },
};

export const Multipart: Story = {
  args: {
    ...Default.args,
    question: {
      ...mockQuestion,
      parts: [
        { id: 'p1', order: 1 },
        { id: 'p2', order: 2 },
      ],
    },
  },
};
