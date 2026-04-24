import TextButton from "./TextButton";
import "../styles/Section.css";

const Section = ({ title, children, loading = false, error = null }) => {
  // 데이터가 없고, 로딩 중이거나 에러가 없는 초기 상태 혹은 로딩 중일 때 스켈레톤 표시
  const shouldShowSkeleton =
    loading || !children || (Array.isArray(children) && children.length === 0);

  return (
    <section className="section-row">
      <div className="section-row__header">
        <h2 className="section-row__title">{title}</h2>
        <TextButton variant="ghost-header" size="sm" fontWeight="regular">
          Show all
        </TextButton>
      </div>

      <div className="section-row__list">
        {shouldShowSkeleton
          ? // 데이터가 오기 전 기본 유령 카드 (6개)
            Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="section-row__skeleton" />
            ))
          : // 데이터 로드 성공 시 실제 카드들
            children}
      </div>
    </section>
  );
};

export default Section;
