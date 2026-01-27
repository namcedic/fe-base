import { HomeOutlined } from '@ant-design/icons';
import { Button, Card, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl">
        <Card>
          <Space direction="vertical" size="large" className="w-full">
            <div className="text-center">
              <HomeOutlined className="mb-4 text-6xl text-blue-500" />
              <Title level={1}>Welcome to FE Base Project</Title>
              <Paragraph className="text-lg">
                Next.js 15 + TypeScript + Tailwind CSS + Ant Design
              </Paragraph>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card title="Technologies" size="small">
                <ul className="list-inside list-disc space-y-2">
                  <li>Next.js 16</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>SCSS</li>
                  <li>Ant Design</li>
                </ul>
              </Card>

              <Card title="Dev Tools" size="small">
                <ul className="list-inside list-disc space-y-2">
                  <li>ESLint</li>
                  <li>Prettier</li>
                  <li>Husky</li>
                  <li>TypeScript</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button type="primary" size="large">
                Get Started
              </Button>
              <Button size="large">Learn More</Button>
            </div>
          </Space>
        </Card>
      </div>
    </main>
  );
}
