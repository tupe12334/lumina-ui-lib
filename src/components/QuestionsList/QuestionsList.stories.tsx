import type { Meta, StoryObj } from '@storybook/react';
import { QuestionsList } from './QuestionsList';

const meta = {
  title: 'Components/QuestionsList',
  component: QuestionsList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockQuestions = [
  {
    id: '1',
    text: 'What is React?',
    type: 'selection',
    validationStatus: 'approved',
    modules: [{ id: 'm1', name: 'JavaScript' }],
  },
  {
    id: '2',
    text: 'What is TypeScript?',
    type: 'boolean',
    validationStatus: 'approved',
    modules: [{ id: 'm2', name: 'TypeScript' }],
  },
  {
    id: '3',
    text: 'What are React Hooks?',
    type: 'selection',
    validationStatus: 'approved',
    modules: [{ id: 'm3', name: 'React' }],
  },
];

const mockStats = {
  totalSubmissions: 5,
  correctSubmissions: 3,
  incorrectSubmissions: 2,
  successRate: 0.6,
  latestSubmission: null,
  submissions: [],
};

export const Default: Story = {
  args: {
    questions: mockQuestions,
    isMobile: false,
    getStatsForQuestion: () => mockStats,
    hasMore: false,
    isLoading: false,
    isLoadingMore: false,
    onLoadMore: null,
    renderQuestionCard: ({ question }) => (
      <div style={{
        padding: '20px',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        <div style={{ fontSize: '16px', color: '#111827', fontWeight: '500' }}>
          {question.text}
        </div>
        {question.modules && question.modules.length > 0 && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {question.modules.map((module) => (
              <span
                key={module.id}
                style={{
                  padding: '4px 12px',
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  borderRadius: '4px',
                  fontSize: '12px',
                  display: 'inline-block',
                }}
              >
                {module.name}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
    renderInfiniteScrollContainer: null,
  },
};

export const WithInfiniteScroll: Story = {
  args: {
    ...Default.args,
    hasMore: true,
    onLoadMore: () => console.log('Load more'),
    renderInfiniteScrollContainer: ({ children }) => (
      <div style={{ maxHeight: '600px', overflow: 'auto' }}>{children}</div>
    ),
  },
};
