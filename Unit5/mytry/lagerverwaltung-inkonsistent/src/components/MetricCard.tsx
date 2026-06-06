import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface MetricCardProps {
  label: string;
  value: React.ReactNode;
  accentColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  accentColor = '#1976d2',
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" component="div">
          {label}
        </Typography>
        <Typography variant="h5" component="div" style={{ color: accentColor }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;

