export interface AvatarPorps {
  /** 경로 */
  src: string;

  /** 대체 텍스트 */
  alt?: string;

  /** 입력 이벤트 */
  // div에서 event 호출시 lint에러 발생
  // onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
