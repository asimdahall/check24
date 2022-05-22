export interface Products {
  products: Product[];
}

export interface Product {
  goodCreditRating: boolean;
  dacRequired: boolean;
  popupPageNegativeRate: boolean;
  oneKnTipp: boolean;
  longerRightOfWithdrawal: boolean;
  longerRightOfWithdrawalInfo: string;
  equalConditionsForAll: boolean;
  allowDebtConversion: boolean;
  selfEmployedPossible?: boolean;
  productType: number;
  productId: number;
  isBalloon: boolean;
  hasDetails: boolean;
  bank: Bank;
  rates: Rates;
  oldInterest?: number;
  lastRate: number;
  speedInfo: SpeedInfo;
  payOutBanner: PayOutBanner;
  bullets: string;
  label?: Label;
  promotionalInterest: PromotionalInterest;
  pseudoBank: boolean;
  promotedBlockCredit: boolean;
  stars?: number;
  longerRightOfWithdrawalDays?: string;
}

export interface Bank {
  id: number;
  name: string;
  detailedName: string;
  loanerName: string;
  regional: boolean;
  rating: Rating;
  groupName?: string;
}

export interface Rating {
  stars: number;
  starsLast12Months: number;
  reviewsLast12Months: number;
  reviewsTotal: number;
}

export interface Label {
  title: Title;
  text: LabelText;
}

export enum LabelText {
  ExklusivFürSparkassenkunden = "Exklusiv für Sparkassenkunden",
  SofortAuszahlung = "Sofort-Auszahlung",
  VolldigitalerAbschluss = "Volldigitaler Abschluss"
}

export enum Title {
  Default = "default",
  Exclusive = "exclusive"
}

export interface PayOutBanner {
  type?: Type;
  payoutDate: string;
}

export enum Type {
  Instant = "instant",
  Standard = "standard"
}

export interface PromotionalInterest {
  till?: string;
  tooltip?: string;
}

export interface Rates {
  effective: Effective;
  nominal: Effective;
  twoThirds: TwoThirds;
  bundesbank: Bundesbank;
}

export interface Bundesbank {
  totalSaving: number;
  interest: number;
  monthlyRate: number;
}

export interface Effective {
  min: Max;
  max: Max;
}

export interface Max {
  interest: number;
  monthlyRate: number;
  totalLoanAmount: number;
}

export interface TwoThirds {
  effective: number;
  nominal: number;
  monthlyRate: number;
  totalLoanAmount: number;
}

export interface SpeedInfo {
  level: number;
  title: string;
  subTitle?: Sub;
  text: SpeedInfoText;
  bullets: Bullets;
  titledPhrases: TitledPhrase[];
  thumbColor: ThumbColor;
  showBanderole: boolean;
  tooltipLevel: number;
}

export interface Bullets {
  docUpload: boolean;
  identity: boolean;
  signature: boolean;
  instant: boolean;
}

export enum Sub {
  DankSofortEntscheid = "dank Sofort-Entscheid",
  DankTeilweiseDigitalemAbschluss = "dank teilweise digitalem Abschluss",
  DankVolldigitalemAbschluss = "dank volldigitalem Abschluss",
  DankVolldigitalemAbschlussMITSofortEntscheid = "dank volldigitalem Abschluss mit Sofort-Entscheid"
}

export enum SpeedInfoText {
  AufwendigerKredit = "aufwendiger Kredit",
  EinfacherKredit = "einfacher Kredit",
  SchnellsterKredit = "schnellster Kredit",
  SehrEinfacherKredit = "sehr einfacher Kredit"
}

export enum ThumbColor {
  DarkGreen = "darkGreen",
  Gray = "gray",
  Green = "green",
  LightGreen = "lightGreen"
}

export interface TitledPhrase {
  title: string;
  subHeadline?: Sub;
  phrases: Phrase[];
  extension?: string;
}

export interface Phrase {
  hookIcon: boolean;
  bold: boolean;
  creditSpeedText: CreditSpeedText;
  digitalizationFeature?: DigitalizationFeature;
  creditSpeedHint?: CreditSpeedHint;
}

export enum CreditSpeedHint {
  NurBeiKreditabschlussMITDigitalerUnterschriftMöglich = "(nur bei Kreditabschluss mit digitaler Unterschrift möglich)"
}

export enum CreditSpeedText {
  DokumentenUploadNichtNotwendig = "Dokumenten-Upload nicht notwendig",
  IdentitätNachweisenMITVideoident = "Identität nachweisen mit Videoident",
  KreditMITSofortEntscheid = "Kredit mit Sofort-Entscheid",
  UnterlagenEinreichenMITDokumentenUpload = "Unterlagen einreichen mit Dokumenten-Upload",
  VertragUnterzeichnenMITDigitalerUnterschrift = "Vertrag unterzeichnen mit digitaler Unterschrift",
  VideoidentNichtNotwendig = "Videoident nicht notwendig"
}

export enum DigitalizationFeature {
  DocumentUpload = "DOCUMENT_UPLOAD",
  Esignature = "ESIGNATURE",
  InstantCredit = "INSTANT_CREDIT",
  VideoIdent = "VIDEO_IDENT"
}
