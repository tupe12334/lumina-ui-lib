/* eslint-disable lumina-custom/require-component-tests-and-screenshots */
import type { JSX, ReactNode } from 'react';
import type { Question } from '../../../types/question';
import styles from '../QuestionCard.module.css';

interface CardContentProps {
  question: Question;
  isMobile: boolean;
  headerContent: ReactNode;
  modulesContent: ReactNode;
}

export function CardContent(props: CardContentProps): JSX.Element {
  const { headerContent, modulesContent } = props;

  return (
    <div className={styles['question-card-content']}>
      {headerContent}
      {modulesContent}
    </div>
  );
}
