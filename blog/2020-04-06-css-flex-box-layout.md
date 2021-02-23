<!--
 * @Description: In User Settings Edit
 * @Author: southerly
 * @Date: 2021-02-21 11:26:00
 * @LastEditors: southerly
 * @lastEditTime: Do not edit
-->
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!