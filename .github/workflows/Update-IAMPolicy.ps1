# Load AWS Tools for PowerShell module
Import-Module AWSPowerShell.NetCore

# Replace these values with your actual values
$IAMPolicyArn = "arn:aws:iam::your-account-id:policy/your-policy-name"
$GitHubActionsIPRangesJson = "path\to\github_actions_ip_ranges.json"

# Read GitHub Actions IP ranges from JSON
$GitHubActionsIPRanges = Get-Content -Path $GitHubActionsIPRangesJson | ConvertFrom-Json

# Update IAM policy JSON with IP conditions
$IAMPolicyDocument = @"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::hoff-portfolio/*",
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": $GitHubActionsIPRanges
                }
            }
        }
    ]
}
"@

# Update IAM policy using AWS Tools for PowerShell
Update-IAMPolicy -PolicyArn $IAMPolicyArn -PolicyDocument $IAMPolicyDocument

Write-Host "IAM policy updated successfully!"