<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  
<xsl:template match="/">
    <museums>
        <xsl:apply-templates/>
    </museums>
</xsl:template>

<xsl:template match="museum">
    <museum>
        <name><xsl:valor-of select="@name"/></name>
        <city><xsl:valor-of select="@city"/></city>
        <country><xsl:valor-of select="@country"/></country>
    </museum>
</xsl:template>
</xsl:stylesheet>