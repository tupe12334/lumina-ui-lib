import type { JSX, ReactNode } from 'react';
import styles from '../QuestionCard.module.css';

interface CardHeaderProps {
  questionText: ReactNode;
  multipartBadge: ReactNode;
  progressIndicator: ReactNode;
  isMobile: boolean;
}

export function CardHeader(props: CardHeaderProps): JSX.Element {
  const { questionText, multipartBadge, progressIndicator, isMobile } = props;

  return (
    <div className={styles['question-card-header']}>
      <div className={styles['question-card-header-left']}>
        {questionText}
        {multipartBadge}
      </div>
      <div className={`${styles['question-card-header-right']} ${isMobile ? styles['mobile'] : styles['desktop']}`}>
        {progressIndicator}
      </div>
    </div>
  );
}
