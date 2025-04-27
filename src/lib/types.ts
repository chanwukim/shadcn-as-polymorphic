interface AsProp<C extends React.ElementType> {
  as?: C;
}

export type PolymorphicComponentProps<
  C extends React.ElementType,
  OwnProps = {},
> = AsProp<C> &
  OwnProps &
  Omit<React.ComponentProps<C>, keyof (OwnProps & AsProp<C>)>;
