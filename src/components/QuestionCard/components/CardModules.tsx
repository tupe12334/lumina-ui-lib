/* eslint-disable lumina-custom/require-component-tests-and-screenshots */
import type { JSX, ReactNode } from 'react';
import type { ModuleRef } from '../../../types/question';
import styles from '../QuestionCard.module.css';

interface CardModulesProps {
  questionId: string;
  modules: ModuleRef[];
  renderBadge: (props: {
    questionId: string;
    color: string;
    size: string;
    text: string;
  }) => ReactNode;
}

export function CardModules(props: CardModulesProps): JSX.Element {
  const { questionId, modules, renderBadge } = props;

  return (
    <div
      id={`question-modules-${questionId}`}
      className={styles['question-card-modules']}
    >
      {modules.map((module) => (
        <span key={module.id} className={styles['module-badge-wrapper']}>
          {renderBadge({
            questionId,
            color: 'blue',
            size: '1',
            text: module.name,
          })}
        </span>
      ))}
    </div>
  );
}
