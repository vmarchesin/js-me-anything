import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledQuestion = styled.div`
  max-width: 100vw;
  padding: 8px;

  p {
    text-align: center;
  }

  .hide-solution {
    visibility: ${ifProp('solutionsAreVisible', 'visible', 'hidden')};
  }

  .explanation {
    max-width: 800px;
    margin-top: 16px;
    line-height: 32px;

    > div > div {
      text-align: center;
    }

    pre {
      display: inline !important;
    }
  }

  .inline-code {
    pre {
      display: inline !important;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 16px;
  }

  .actions {
    display: flex;
    justify-content: center;
    margin-top: 16px;

    > * {
      margin: 0 8px;
    }
  }
`;

export const Badges = styled.div`
  text-align: right;
  margin-bottom: 16px;
`;

export const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 800px;

  pre {
    margin: auto !important;
  }

  > div {
    min-width: 50%;
    margin: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;

    > span {
      display: inline-block;
      margin-top: 4px;

      &.solution {
        margin-left: 8px;
      }
    }

    > div {
      margin-left: 8px;

      &:not(.applySyntaxHighlight) {
        pre {
          display: inline !important;
          padding: 0.3em !important;
        }

        > div {
          display: inline-block;
          padding: 4px;
          background-color: #f3f3f3;
          border: 2px solid #bebebe;

          border-radius: 8px;
          cursor: pointer;
        }
      }
    }
  }
`;
